import React from "react";
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from "react-icons/md";

const ExpenseItem = ({ expense, handleDelete }) => {
  console.log(expense);
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expense.charge}</span>
        <span className="amount">{expense.amount}원</span>
      </div>
      <div>
        <button className="edit-btn">
          <MdEdit />
        </button>
        <button className="clear-btn" onClick={() => handleDelete(expense.id)}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
