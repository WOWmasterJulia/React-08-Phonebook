import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));
 return (
        <li className={css.list_item} >{`${name} : ${number}`}
            <button
                className={css.delete_btn}
                type="button"
                onClick={handleDelete}
            >Delete
            </button>
        </li>
    )
}
ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}