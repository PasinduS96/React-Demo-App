import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cards(props) {
	return (
		<div className="card">
			<div class="card-body">
				<h4 class="card-title">Card title</h4>
				<p class="card-text">Some example text. Some example text.</p>
				<a href="/" class="card-link">
					Card link
				</a>
				<a href="/" class="card-link">
					Another link
				</a>
			</div>
		</div>
	);
}
