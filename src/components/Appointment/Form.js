import React from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import { useState } from 'react';

export default function Form (props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  
  const reset = () => {
    setStudent('');
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  return (
    <main className='appointment__card appointment__card--create'>
      <section className='appointment__card-left'>
        <form autoComplete='off'>
          <input
            className='appointment__create-input text--semi-bold'
            value={student}
            onChange={event => setStudent(event.target.value)}
            onSubmit={event => event.preventDefault()}
            name='name'
            type='text'
            placeholder='Enter Student Name'
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className='appointment__card-right'>
        <section className='appointment__actions'>
          <Button onClick={cancel} danger>Cancel</Button>
          <Button onClick={() => props.onSave(student, interviewer)} confirm>Save</Button>
        </section>
      </section>
    </main>
  );
}