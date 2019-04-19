import React from 'react';

export default function RegisterForm() {
	return (
		<div className="card mb-3" style={{paddiing:'20px'}}>
			<div className="card-header text-white" style={{ background: '#1C2833 ' }}>
				Register Form
			</div>
			<div className="card-body">
				<form>
					<div className="form-group">
						<label htmlFor="fname"> First Name </label>
						<input
							type="text"
							name="fname"
							placeholder="Enter First Name"
							className="form-control fom-control-lg"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="lname"> Last Name </label>
						<input
							type="text"
							name="lname"
							placeholder="Enter Last Name"
							className="form-control fom-control-lg"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="mail"> Email </label>
						<input
							type="email"
							name="mail"
							placeholder="Enter Email"
							className="form-control fom-control-lg"
						/>
					</div>

					<form className="form-inline">
						<div className="form-group mr-sm-4 ">
							<label htmlFor="cpwd" className="mr-sm-3">
								Gender
							</label>
							<select name="genders" class="custom-select">
								<option selected>Select Gender</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
						</div>

						<div className="form-group mr-sm-4 ">
							<label htmlFor="datearea" className="mr-sm-3">
								Birth Date
							</label>
							<input type="date" name="datearea" className="form-control mb-2 mr-sm-2" />
						</div>

						<div className="form-group mr-sm-4 ">
							<label htmlFor="pwd" className="mr-sm-3">
								Enter Password
							</label>
							<input type="password" name="pwd" className="form-control mb-2 mr-sm-2" />
						</div>

						<div className="form-group mr-sm-4">
							<label htmlFor="cpwd" className="mr-sm-3">
								Confirm Password
							</label>
							<input type="passowrd" name="cpwd" className="form-control mb-2 mr-sm-2" />
						</div>
					</form>
					<br />
					<div className="form-group text-center ">
						<input
							type="submit"
							name="submit"
							className="btn btn-dark col-xs-offset-0 col-sm-offset-3 col-sm-7"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
