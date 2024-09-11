import {useEffect, useState} from 'react';
import axios from 'axios';

export default function useSearch(query, pageNumber) {
  useEffect(() => {
    axios({
        method: 'GET',
        url: './blogData.js',
        params: {q: query, id: blogNumber}
    })
  }, [query, blogNumber])
  return null
}
