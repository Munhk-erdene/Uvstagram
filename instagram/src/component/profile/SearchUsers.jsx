import { Link } from "react-router-dom";
const SearchUsers = ({ value }) => {
  console.log(value);
  return (
    <div className='userDataContainer'>
      <div className='userData'>
        <img src={value.image} alt='' className='userDataBox' />
        <div className='names'>
          <Link
            to={`${value._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>{value.userName}</div>
          </Link>

          <div className='userName'>
            <div> {value.firstName}</div>
            <div> {value.lastName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchUsers;
