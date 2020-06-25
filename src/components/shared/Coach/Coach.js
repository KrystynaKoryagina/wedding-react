import React from 'react';
import PropTypes from 'prop-types';

import './Coach.scss';

import Button from '../Button/Button';

const Coach = (props) => {

	const {style, name, direction, workExperience, teachExperience, url, index} = props;

	return (
		<div className="coach">
			<div className="coach__photo">
				<img className="coach__img" src={require(`../../../assets/images/coach-${index+1}.jpg`)} alt="Coach" />
			</div>
			<div className="coach__info">
				<div className="coach__num">{index+1}</div>
				<div className="coach__name">{name}</div>
				<div className="coach__prof">{direction}</div>
				<ul className="coach__data">
					<li className="coach__data-item">
						<span className="coach__data-title">Work experience</span>{workExperience} years
					</li>
					<li className="coach__data-item">
						<span className="coach__data-title">Teacher for</span>{teachExperience} years
					</li>
					<li className="coach__data-item">
						<span className="coach__data-title">Style</span>{style}
					</li>
				</ul>

				<Button
					title="Let’s start" 
					href={url}
					className="coach__btn btn--pink"
				/>
			</div>
		</div>
	)
}

Coach.propTypes = {
	style: PropTypes.array,
	name: PropTypes.string,
	direction: PropTypes.string,
	workExperience: PropTypes.string,
	teachExperience: PropTypes.string, 
	url: PropTypes.string, 
	index: PropTypes.number, 
}

export default Coach;