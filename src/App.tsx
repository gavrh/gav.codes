import React from 'react';
import tw from 'tailwind-styled-components';

export default function App() {

  return (
    <AppContainer>
      {/* profile */}
      <Section>
        <h1>
          Gavin, 19
        </h1>
        <h1>Software Engineer</h1>
      </Section>
      {/* about me */}
      <Section></Section>
      {/* technologies */}
      <Section></Section>
      {/* experience */}
      <Section></Section>
      {/* projects */}
      <Section></Section>
    </AppContainer>
  );
}

// app styled components
const AppContainer = tw.div`
  w-full
  max-w-[1000px]
  flex
  flex-col
  justify-center
  items-center
  border-[1px]
  border-red-500
`

const Section = tw.div`
  h-[350px]
  w-full
  px-[10px]
  my-[10px]

  border-[1px]
  border-green-500
`