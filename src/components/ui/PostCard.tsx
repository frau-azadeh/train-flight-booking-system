import React, { ReactNode } from 'react'

interface PostCardProps{
    children: ReactNode;
}

const PostCard: React.FC<PostCardProps> = ({
    children,
}) => {
  return (
    <div className='rounded-lg bg-white border border-gray-300 transition duration-300 shadow-sm hover:shadow-gray-300 p-2 m-2 flex'>
        {children}
    </div>
)
}

export default PostCard