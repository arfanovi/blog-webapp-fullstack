import React, { useState } from 'react'
import AuthorCard from '../components/AuthorCard';

export const DUMMY_AUTHORS = [
  {
    authorID: '101',
    authorName: 'Alice Johnson',
    totalPosts: 5,
    designation: 'React Developer',
    image: 'https://via.placeholder.com/100?text=Alice+Johnson',
  },
  {
    authorID: '102',
    authorName: 'Bob Smith',
    totalPosts: 5,
    designation: 'React Developer',
    image: 'https://via.placeholder.com/100?text=Bob+Smith',
  },
  {
    authorID: '103',
    authorName: 'Charlie Davis',
    totalPosts: 5,
    designation: 'React Developer',
    image: 'https://via.placeholder.com/100?text=Charlie+Davis',
  },
  {
    authorID: '104',
    authorName: 'David Lee',
    totalPosts: 5,
    designation: 'React Developer',
    image: 'https://via.placeholder.com/100?text=David+Lee',
  },
  {
    authorID: '105',
    authorName: 'Eva Martinez',
    totalPosts: 5,
    designation: 'React Developer',
    image: 'https://via.placeholder.com/100?text=Eva+Martinez',
  },
  {
    authorID: '201',
    authorName: 'Frank Walker',
    totalPosts: 5,
    designation: 'Node Developer',
    image: 'https://via.placeholder.com/100?text=Frank+Walker',
  },
  {
    authorID: '202',
    authorName: 'Grace Taylor',
    totalPosts: 5,
    designation: 'Node Developer',
    image: 'https://via.placeholder.com/100?text=Grace+Taylor',
  },
  {
    authorID: '203',
    authorName: 'Henry Clark',
    totalPosts: 5,
    designation: 'Node Developer',
    image: 'https://via.placeholder.com/100?text=Henry+Clark',
  },
  {
    authorID: '204',
    authorName: 'Ivy Harris',
    totalPosts: 5,
    designation: 'Node Developer',
    image: 'https://via.placeholder.com/100?text=Ivy+Harris',
  },
  {
    authorID: '205',
    authorName: 'Jack Robinson',
    totalPosts: 5,
    designation: 'Node Developer',
    image: 'https://via.placeholder.com/100?text=Jack+Robinson',
  },
  {
    authorID: '301',
    authorName: 'Karen Walker',
    totalPosts: 5,
    designation: 'Express Developer',
    image: 'https://via.placeholder.com/100?text=Karen+Walker',
  },
  {
    authorID: '302',
    authorName: 'Louis King',
    totalPosts: 5,
    designation: 'Express Developer',
    image: 'https://via.placeholder.com/100?text=Louis+King',
  },
  {
    authorID: '303',
    authorName: 'Monica Scott',
    totalPosts: 5,
    designation: 'Express Developer',
    image: 'https://via.placeholder.com/100?text=Monica+Scott',
  },
  {
    authorID: '304',
    authorName: 'Nathan Adams',
    totalPosts: 5,
    designation: 'Express Developer',
    image: 'https://via.placeholder.com/100?text=Nathan+Adams',
  },
  {
    authorID: '305',
    authorName: 'Olivia Perez',
    totalPosts: 5,
    designation: 'Express Developer',
    image: 'https://via.placeholder.com/100?text=Olivia+Perez',
  },
  {
    authorID: '401',
    authorName: 'Paul Green',
    totalPosts: 5,
    designation: 'MongoDB Developer',
    image: 'https://via.placeholder.com/100?text=Paul+Green',
  },
  {
    authorID: '402',
    authorName: 'Quincy Moore',
    totalPosts: 5,
    designation: 'MongoDB Developer',
    image: 'https://via.placeholder.com/100?text=Quincy+Moore',
  },
  {
    authorID: '403',
    authorName: 'Rita Lewis',
    totalPosts: 5,
    designation: 'MongoDB Developer',
    image: 'https://via.placeholder.com/100?text=Rita+Lewis',
  },
  {
    authorID: '404',
    authorName: 'Steve White',
    totalPosts: 5,
    designation: 'MongoDB Developer',
    image: 'https://via.placeholder.com/100?text=Steve+White',
  },
  {
    authorID: '405',
    authorName: 'Tina Harris',
    totalPosts: 5,
    designation: 'MongoDB Developer',
    image: 'https://via.placeholder.com/100?text=Tina+Harris',
  },
];


const Author = () => {
  const [authors, setAuthors] = useState(DUMMY_AUTHORS);

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">Authors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {authors.slice(0, 9).map((author) => (
          <AuthorCard key={author.authorID} author={author} />
        ))}
      </div>
    </div>
  );
};


export default Author
