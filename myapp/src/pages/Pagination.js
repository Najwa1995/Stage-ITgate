import React from 'react'


const Pagination = ({ postsPerPage, totalPosts }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {

        pageNumbers.push(i)
    }

    return (

        <ul className='pagination d-flex align-items-center'>
            {
                pageNumbers.map(number => (
                    <li key={number}>
                        <a href='!#'>
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Pagination