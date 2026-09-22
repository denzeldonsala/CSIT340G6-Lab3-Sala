import './CSS Files/App.css'

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.course}</h1>
      <p>Course Information</p>
    </header>
  )
}

const Part = (props) => {
  return (
    <div className="subject">
      <span className="subject-name">{props.name}</span>
      <span className="units">{props.exercises} units</span>
    </div>
  )
}

const Content = (props) => {
  return (
    <div className="content">
      <Part
        name={props.part1}
        exercises={props.exercises1}
      />

      <Part
        name={props.part2}
        exercises={props.exercises2}
      />

      <Part
        name={props.part3}
        exercises={props.exercises3}
      />
    </div>
  )
}

const Total = (props) => {
  return (
    <div className="total">
      <span>Total Units</span>
      <strong>
        {props.exercises1 + props.exercises2 + props.exercises3}
      </strong>
    </div>
  )
}

const Footer = (props) => {
  return (
    <footer className="footer">
      {props.name} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340 - Industry Elective 1'

  const part1 = 'Systems Integration and Architecture 1'
  const exercises1 = 3

  const part2 = 'CSIT341 - Industry Elective 2'
  const exercises2 = 3

  const part3 = 'CSIT342 - Industry Elective 3'
  const exercises3 = 3

  const name = 'Denzel Don L. Sala'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <div className="app">
      <Header course={course} />

      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />

      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />

      <Footer
        name={name}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App