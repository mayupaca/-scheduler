import React from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import { useState } from 'react';

export default function Form (props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState('');

  const reset = (val) => {
    setStudent('');
    setInterviewer(null);
    val = "";
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  function validate() {
    if (student === '') {
      setError('Student name cannot be blank');
      return;
    } else if (interviewer === null) {
      setError('Select an interviewer');
      return;
    }

    setError('');
    props.onSave(student, interviewer);
  }

  return (
    <main className='appointment__card appointment__card--create'>
      <section className='appointment__card-left'>
        <form autoComplete="off" onSubmit={e => e.preventDefault()} >
          <input
            className='appointment__create-input text--semi-bold'
            data-testid="student-name-input"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            name='name'
            type='text'
            placeholder='Enter Student Name'
          />
          <section className="appointment__validation">{error}</section>
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
          <Button onClick={validate} confirm>Save</Button>
        </section>
      </section>
    </main>
  );
}