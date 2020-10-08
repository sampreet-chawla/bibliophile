import React from 'react';

import './Resources.css';

const Resources = (props) => {
	return (
		<div className='resources-container'>
			<h3>Resources</h3>
			<h5>My Project Journey - Upcoming...</h5>
			<p>In search of Books API</p>
			<p>Deployed by netlify</p>
			<h5>Apps and Links to support Good Reading Habits</h5>
			<ul>
				<li>
					<a
						href='https://nickwignall.com/reading-habit/'
						target='_blank'
						rel='noopener noreferrer'>
						19 Powerful Techniques to Build a Reading Habit (2020)
					</a>
				</li>
				<li>
					<a
						href='https://www.understood.org/en/school-learning/learning-at-home/encouraging-reading-writing/8-tips-to-help-young-kids-develop-good-reading-habits'
						target='_blank'
						rel='noopener noreferrer'>
						8 Tips to Help Young Kids Develop Good Reading Habits
					</a>
				</li>
				<li>
					<a
						href='https://fueled.com/blog/best-apps-for-book-lovers/'
						target='_blank'
						rel='noopener noreferrer'>
						The 9 Best Apps for Book Lovers
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Resources;
