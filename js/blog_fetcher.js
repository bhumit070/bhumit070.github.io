const API_URL = 'https://dev.to/api/articles?username=bhumit070';
const blogContainer = document.querySelector('#blog--container')
const blogContainerHTML = blogContainer.innerHTML
function generateBlogHtml({ title = '', social_image = '', tag_list = [], canonical_url = '', readable_publish_date } = {}) {
	const html = `
			<div class="card--project" style="cursor: pointer" onclick='window.location.href = "${canonical_url}"'>
                    <img
                        style="width: 100%"
                        src="${social_image}"
                        alt="blog"
                    />
                    <h3
                        >${title}</
                    >
					<small style="display:block">Published on ${readable_publish_date}</small>
                    ${tag_list.length ?
			`
					<div>
                        ${tag_list.map(tag => {
				return `<span class="pill">${tag}</span>`
			})
			}
                    </div>
						`
			: ''
		}
                </div>
		`
	return html;
}

fetch(API_URL)
	.then(response => {
		if (!response.ok) {
			throw new Error(`Something went wrong: ${response.status}`)
		} else {
			return response.json()
		}
	}).then(blogs => {
		let html = ''
		blogs.forEach(blog => {
			html += generateBlogHtml(blog)
		})
		blogContainer.innerHTML = blogContainer.innerHTML.replace('{blogs}', html)
	})
	.catch(e => {
		blogContainer.innerHTML = blogContainerHTML.replace('{blogs}', `<p class="error">Failed to get the blog list.</p>`)
	})