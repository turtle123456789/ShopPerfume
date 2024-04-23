import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../../services/UserService';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
const TableUser = ()=>{
    const [listUsers, setListUsers] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    useEffect(()=>{
        getUsers(1);

    },[])
    const getUsers = async(countPage)=>{
        let res = await fetchAllUser(countPage)
        console.log('listUsers', res)
        if(res && res.data){
            setListUsers(res.data)
            setTotalPage(res.total_pages)
        }
    }

    function handlePageClick(even){
        getUsers(+even.selected+1);
    }
    return(<>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Id</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {listUsers&&listUsers.length>0&&listUsers.map((item,index)=>{
                    return(
                        <tr key={`item-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPage}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>)
}
export default TableUser