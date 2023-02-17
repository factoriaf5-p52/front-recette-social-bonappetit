import React from 'react'

type Props = {text: string}

const BoxProfile = (props: Props) => {
  return (
    <div>{props.text}</div>
  )
};

export default BoxProfile