import React from 'react';

import './Resources.css';

const Resources = (props) => {
	return (
		<div className='resources'>
			<h3>Resources</h3>
			<h4>My Project Journey</h4>
			<p>In search of Books API</p>
			<p>Deployed by netlify</p>
			<h4>Apps and Links to support Good Reading Habits</h4>
			<ul>
				<li>
					<a href='https://nickwignall.com/reading-habit/' target='_blank'>
						19 Powerful Techniques to Build a Reading Habit (2020)
					</a>
				</li>
				<li>
					<a
						href='https://www.understood.org/en/school-learning/learning-at-home/encouraging-reading-writing/8-tips-to-help-young-kids-develop-good-reading-habits'
						target='_blank'>
						8 Tips to Help Young Kids Develop Good Reading Habits
					</a>
				</li>
				<li>
					<a
						href='https://fueled.com/blog/best-apps-for-book-lovers/'
						target='_blank'>
						The 9 Best Apps for Book Lovers
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Resources;
