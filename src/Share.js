import React from 'react';

import {
	EmailShareButton,
	FacebookShareButton,
	//InstapaperShareButton,
	LinkedinShareButton,
	//TwitterShareButton,
	//WhatsappShareButton,
	EmailIcon,
	FacebookIcon,
	LinkedinIcon
  } from "react-share";

function Share({hostURL, shareStatement}) {
	return(
		<div className='share-container'>
			<FacebookShareButton
			url={hostURL}
			quote={shareStatement}
			>
			<FacebookIcon size={36} />
			</FacebookShareButton>

			<LinkedinShareButton
			url={hostURL}
			title={shareStatement}
			>
			<LinkedinIcon size={36} />
			</LinkedinShareButton>

			<EmailShareButton
			url={hostURL}
			subject={shareStatement}
			>
			<EmailIcon size={36} />
			</EmailShareButton>
		</div>
	)
}

export default Share; 