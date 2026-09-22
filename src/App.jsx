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
        name={props.part1.name}
        exercises={props.part1.exercises}
      />

      <Part
        name={props.part2.name}
        exercises={props.part2.exercises}
      />

      <Part
        name={props.part3.name}
        exercises={props.part3.exercises}
      />
    </div>
  )
}

const Total = (props) => {
  return (
    <div className="total">
      <span>Total Units</span>
      <strong>
        {props.part1.exercises +
          props.part2.exercises +
          props.part3.exercises}
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

  const part1 = {
    name: 'Systems Integration and Architecture 1',
    exercises: 3
  }

  const part2 = {
    name: 'CSIT341 - Industry Elective 2',
    exercises: 3
  }

  const part3 = {
    name: 'CSIT342 - Industry Elective 3',
    exercises: 3
  }

  const name = 'Denzel Don L. Sala'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <div className="app">
      <Header course={course} />

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Total
        part1={part1}
        part2={part2}
        part3={part3}
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