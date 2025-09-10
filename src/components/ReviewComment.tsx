import React from "react";

interface ReviewCommentProps {
  user: string;
  comment: string;
  avatar?: string;
}

const ReviewComment: React.FC<ReviewCommentProps> = ({ user, comment, avatar }) => {
  return (
    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
      {avatar ? (
        <img
          src={avatar}
          alt={user}
          className="w-10 h-10 rounded-full object-cover"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-800 font-semibold">
          {user[0]}
        </div>
      )}
      <div className="flex-1">
        <p className="text-gray-900 text-sm font-semibold">{user}</p>
        <p className="text-gray-700 text-sm mt-1">{comment}</p>
      </div>
    </div>
  );
};

export default ReviewComment;
