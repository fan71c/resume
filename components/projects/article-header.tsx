"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface ArticleHeaderProps {
  title: string;
  date: string;
  link: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title, date ,link}) => (
  <motion.header className="mb-8"
  initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1>{title}</h1>
    <div className="text-sm text-gray-600 dark:text-gray-300">
      <p>By Danylo Burenkov</p>
      <p>{date}</p>
{/*<a href={link} className={"underline"}>Link to source files</a>*/}
    </div>
  </motion.header>
);

export default ArticleHeader;
