'use strict'

function getElement(selector) {
	return document.querySelector(selector)
}

const userName = getElement('#user-name')
const bio = getElement('#bio')
const personalEmail = getElement('#personal-email')


const data = {
	name: 'Bhoomit Ganatra',
	email: '📧 bhoomit.dev@gmail.com',
	corporateInfo: {
		designation: 'Software developer',
		companyName: 'Yudiz',
		companyUrl: 'https://yudiz.com'
	}
}
const anchorTag = document.createElement('a')
anchorTag.href = data.corporateInfo.companyUrl
anchorTag.textContent = data.corporateInfo.companyName
anchorTag.target = '_blank'

// add data
userName.textContent = data.name
personalEmail.textContent = data.email
personalEmail.href = `mailto:${data.email}`

bio.innerHTML = `${data.corporateInfo.designation}, @<a href="${data.corporateInfo.companyUrl}">${data.corporateInfo.companyName}</a>.`