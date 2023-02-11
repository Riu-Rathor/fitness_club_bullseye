function Table({ tableData }) {
    return (
        <table className="table-property">
            <thead className="t-head">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody className="t-body">
                {tableData.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.mobile}</td>
                            <td>{data.address}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
export default Table;