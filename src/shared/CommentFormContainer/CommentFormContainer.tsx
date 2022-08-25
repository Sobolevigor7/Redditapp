import React, {ChangeEvent, FormEvent} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../../store/reducer";
import { CommentForm} from "../CommentForm";

export function CommentFormContainer() {

    const value = useSelector<RootState, string>(state => state.commentText)
    const dispatch = useDispatch();

    function handleChange(event: string) {
        dispatch(updateComment(event));
    }

    function handleSubmit () {
        console.log('value', value)
        alert(`'value is, ${value}` )
    }

    return (<div>

       <CommentForm
          value={value}
          formUpdate={handleChange}
          onSubmitForm={handleSubmit}/>
    </div>);
}
