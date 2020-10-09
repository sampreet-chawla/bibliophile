import React from 'react';

import './Resources.css';

const Resources = (props) => {
	return (
		<div className='resources-container'>
			<h3>Resources</h3>
			<article className='resources article1'>
				<h5>My Project Journey - Upcoming...</h5>
				<ul>
					<li>📗 Search of right Books API...</li>
					<li>📗 ...</li>
					<li>📗 Deployed by netlify</li>
				</ul>
			</article>
			<iframe
				src='https://giphy.com/embed/8dYmJ6Buo3lYY'
				height='150'
				frameBorder='0'
				class='giphy-embed'
				allowFullScreen></iframe>
			<p>
				<a
					href='https://giphy.com/gifs/baby-story-reading-8dYmJ6Buo3lYY'
					target='_blank'
					rel='noopener noreferrer'></a>
			</p>
			<article className='resources article2'>
				<h5>Apps and Links to support Good Reading Habits</h5>
				<ul>
					<li>
						📗
						<a
							href='https://nickwignall.com/reading-habit/'
							target='_blank'
							rel='noopener noreferrer'>
							19 Powerful Techniques to Build a Reading Habit (2020)
						</a>
					</li>
					<li>
						📗
						<a
							href='https://www.understood.org/en/school-learning/learning-at-home/encouraging-reading-writing/8-tips-to-help-young-kids-develop-good-reading-habits'
							target='_blank'
							rel='noopener noreferrer'>
							8 Tips to Help Young Kids Develop Good Reading Habits
						</a>
					</li>
					<li>
						📗
						<a
							href='https://fueled.com/blog/best-apps-for-book-lovers/'
							target='_blank'
							rel='noopener noreferrer'>
							The 9 Best Apps for Book Lovers
						</a>
					</li>
				</ul>
			</article>
		</div>
	);
};

export default Resources;
