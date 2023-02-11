function Form({ onValChange, formObject, onFormSubmit }) {
    return (
        <div className="main-form">
        <div className="mb-4 inner-form">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={onValChange}
                    value={formObject.name}
                    name="name"
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={onValChange}
                    value={formObject.email}
                    name="email"
                />
            </div>
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Phone No"
                    onChange={onValChange}
                    value={formObject.mobile}
                    name="mobile"
                />
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    onChange={onValChange}
                    value={formObject.address}
                    name="address"
                />
            </div>
            <div className="d-grid w-25 ">
                <input
                    type="submit"
                    onClick={onFormSubmit}
                        className="submit-btn"
                    value= "Add Member"
                />
                </div>
                <button className="members-list-btn" onClick={menuHandler}>View Members List</button>
            </div>
        </div>
    );
}

const menuHandler = () => {
    const element = document.querySelector('.table-property');

    if (element.style.opacity === "1") {
        element.style.opacity = "0";
    } else {
        element.style.opacity = "1";
    }
}
export default Form;