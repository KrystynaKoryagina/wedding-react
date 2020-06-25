import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { store } from 'react-notifications-component';

import {sectionDataService} from '../../../services/sectionDataService';

import Button from '../Button/Button';

const notifyConfigs = {
	success: {
		title: "Success",
		message: "Section data are successfully update",
		type: "success",
		insert: "top",
		container: "top-center",
		animationIn: ["animated", "fadeIn"],
		animationOut: ["animated", "fadeOut"],
		dismiss: {
			duration: 3000,
			onScreen: true
		}		
	}
}

const EditForm = ({bannerData, onModalHandler, updateData}) => {
	const {meta} = bannerData;

	const [titleValue, setTitle] = useState(meta.title);
	const [locationValue, setLocation] = useState(meta.location);
	const [descriptionValue, setDescription] = useState(meta.description);
	const [imageValue, setImage] = useState(meta.heroImage);

	const onSubmitHandler = () => {
		const sectionData = {
			...bannerData,
			meta: {
				title: titleValue,
				location: locationValue,
				description: descriptionValue,
				heroImage: imageValue
			}
		}; 

		sectionDataService.updateSection(sectionData)
			.then(() => {
				updateData();
				onModalHandler();
				store.addNotification(notifyConfigs.success);
			});
	}

	return (
		<form onSubmit={e => e.preventDefault()} className="form">

			<div className="form__group">
				<label htmlFor="title">Title</label>
				<input
					className="form__control"
					id="title"
					name="title"
					type="text"
					value={titleValue}
					required
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="form__group">
				<label htmlFor="location">Location</label>
				<input
					className="form__control"
					id="location"
					name="location"
					value={locationValue}
					type="text"
					required
					onChange={(e) => setLocation(e.target.value)}
				/>
			</div>
			<div className="form__group">
				<label htmlFor="image">Image</label>
				<input
					className="form__control"
					id="image"
					name="image"
					type="text"
					value={imageValue}
					required
					onChange={(e) => setImage(e.target.value)}
				/>
			</div>
			<div className="form__group">
			<label htmlFor="desc">Description</label>
			<textarea
				className="form__control"
				id="desc"
				name="desc"
				type="text"
				value={descriptionValue}
				required
				onChange={(e) => setDescription(e.target.value)}
			/>
		</div>

			<Button 
				title="OK"
				onClickHandler={onSubmitHandler}
			/>
			<Button 
				title="Cancel"
				onClickHandler={onModalHandler}
			/>
		</form>
	)

}

EditForm.propTypes = {
	sectionData: PropTypes.shape({
		meta: PropTypes.shape({
			title: PropTypes.string,
			location: PropTypes.string, 
			description: PropTypes.string
		})		
	}),
	onModalHandler: PropTypes.func,
	updateData: PropTypes.func
}

export default EditForm;