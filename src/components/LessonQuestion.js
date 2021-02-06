import React, {useState} from 'react';

export const LessonQuestion = (props) => {

  const [isFilled, setIsFilled] = useState(false)
  const [color, setColor] = useState('gray')

  function createMarkup(text) {
    return {__html: text};
  }

  return (
    <div className="input-group mb-3">
      <div dangerouslySetInnerHTML={createMarkup(props.question)} className="input-group-text col-md-7"></div>
      <div className="input-group-append col-md-5">
        <input style={{borderColor: color}} name="fy" onBlur={event => {
          let ans = event.target.value;
          setIsFilled(true);
          if (parseFloat(ans) === parseFloat(props.answer)) {
            setColor('green');
          } else if (props.unit !== "") {
            let range = props.range.split(" ");
            console.log(range);
            if (range.length === 2) {
              if (parseFloat(ans) >= parseFloat(range[0]) && parseFloat(ans) <= parseFloat(range[1])) {
                setColor('green');
              } else {
                setColor('red')
              }
            }
          } else {
            setColor('red')
          }
        }} type="number" className="form-control" aria-describedby="fy"/>
        <span dangerouslySetInnerHTML={createMarkup(props.unit)} className="p-2"></span>
        <input value={isFilled ? props.answer  : ''} name="fy" disabled type="text"
               className="form-control" aria-describedby="fy"/>
        <span dangerouslySetInnerHTML={createMarkup(props.unit)} className="p-2"></span>
      </div>
    </div>
  )
}
