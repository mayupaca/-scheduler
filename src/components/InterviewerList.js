import React from "react";
import "components/InterviewerList.scss";
import "components/InterviewerListItem.scss";
import InterviewerListItem from "./InterviewerListItem";
// import PropTypes from 'prop-types';

export default function InterviewerList(props) {
  const {interviewers} = props;
  const interviewerList = interviewers.map((interviewer) => 
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        setInterviewer={() => props.onChange(interviewer.id)}
        selected={props.value === interviewer.id}
      />
  );
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerList}</ul>
    </section>
  );

  // InterviewerList.propTypes = {
  //   interviewers: PropTypes.array.isRequired
  // };
}
