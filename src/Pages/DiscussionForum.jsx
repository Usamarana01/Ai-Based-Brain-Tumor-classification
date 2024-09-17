import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Assuming you have configured Firebase properly
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  updateDoc,
  doc,
  arrayUnion,
  increment,
} from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { FaHeart } from 'react-icons/fa'; // Importing the heart icon from react-icons
import './DiscussionForum.css'; // Importing the CSS file for styling

function DiscussionForum() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [newComment, setNewComment] = useState(''); // State for new comment input
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null); // State to track selected post for adding a comment
  const { userData } = useAuth(); // Get userData from context
  const userName = userData?.name || 'Anonymous User'; // Fallback to 'Anonymous User' if no name

  // Fetch posts from Firestore on component mount
  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsData);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Function to handle new post submission
  const handlePostSubmit = async (e) => {
    e.preventDefault();

    if (!newPost.trim()) {
      return; // Don't submit empty posts
    }

    try {
      await addDoc(collection(db, 'posts'), {
        text: newPost,
        userId: userData.email,
        userName: userName,
        createdAt: serverTimestamp(),
        likes: 0, // Initialize likes count
        comments: [], // Initialize empty comments array
      });

      setNewPost(''); // Clear input field after submitting
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  // Function to handle liking a post
  const handleLikePost = async (postId) => {
    try {
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, {
        likes: increment(1), // Increment likes count by 1
      });
    } catch (error) {
      console.error('Error liking post: ', error);
    }
  };

  // Function to handle opening the comment modal
  const handleOpenCommentModal = (postId) => {
    setSelectedPostId(postId);
    setIsCommentModalOpen(true);
  };

  // Function to handle closing the comment modal
  const handleCloseCommentModal = () => {
    setIsCommentModalOpen(false);
    setSelectedPostId(null);
  };

  // Function to handle adding a comment
  const handleAddComment = async (e) => {
    e.preventDefault();

    if (!newComment.trim()) {
      return; // Don't submit empty comments
    }

    try {
      const postRef = doc(db, 'posts', selectedPostId);
      await updateDoc(postRef, {
        comments: arrayUnion({
          text: newComment,
          userName: userName,
          createdAt: new Date().toISOString(),
        }),
      });

      setNewComment(''); // Clear input field after submitting
      handleCloseCommentModal();
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  return (
    <div className="discussion-forum">
      <h2>Welcome to the Discussion Forum, {userName}!</h2>
      <p>
        Engage with the community, share your thoughts, ask questions, and learn from others.
        We're thrilled to have you here, {userName}. Let's build a vibrant community together!
      </p>
      <form onSubmit={handlePostSubmit} className="post-form">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write a new post..."
          rows="4"
          className="post-textarea"
        />
        <button type="submit" className="post-button">Post</button>
      </form>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <p className="post-author"><strong>{post.userName}</strong>:</p>
            <p className="post-content">{post.text}</p>
            <p className="post-timestamp">{new Date(post.createdAt?.toDate()).toLocaleString()}</p>

            {/* Like Button and Like Count */}
            <div className="post-actions">
              <FaHeart
                className={`heart-icon ${post.likes > 0 ? 'liked' : ''}`}
                onClick={() => handleLikePost(post.id)}
              />
              <span className="like-count"> {post.likes} </span>

              {/* Add Comment Button */}
              <span className="add-comment-button" onClick={() => handleOpenCommentModal(post.id)}>
                Add a comment
              </span>
            </div>

            {/* Comment Section */}
            <div className="comments-section">
              {post.comments && post.comments.map((comment, index) => (
                <div key={index} className="comment-item">
                  <p className="comment-author"><strong>{comment.userName}</strong>:</p>
                  <p className="comment-content">{comment.text}</p>
                  <p className="comment-timestamp">{new Date(comment.createdAt).toLocaleString()}</p>
                </div>
              ))}
            </div>
            
            <hr />
          </div>
        ))}
      </div>

      {/* Comment Modal */}
      {isCommentModalOpen && (
        <div className="comment-modal">
          <div className="comment-modal-content">
            <h3>Add a Comment</h3>
            <form onSubmit={handleAddComment}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="comment-textarea"
                rows="4"
                placeholder="Write your comment here..."
              />
              <div className="modal-buttons">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary" onClick={handleCloseCommentModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DiscussionForum;
