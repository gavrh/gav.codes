import { useTheme } from 'styled-components'
import tw from 'tailwind-styled-components'

// Styled Components //

// container
export const WebAppContainer = tw.div`
    flex
    bg-primary-bg
    w-full
    h-screen
    text-zinc-100
    overflow-y-scroll
`
// wrapper
export const WebAppWrapper = tw.div`
    flex
    flex-col
    w-full
    max-w-[1220px]
    h-full
    mx-auto
`
// top
export const WebAppTop = tw.div`
    flex
    justify-between
    w-full
    h-full
    mx-[10px]
`

// profile
export const ProfileContainer = tw.div`
    flex
    flex-col
    min-w-[400px]
    max-w-[400px]
    pr-[20px]
`
// experience
export const ExperienceContainer = tw.div`
    flex
    flex-col
    min-w-[800px]
    max-w-[800px]
`
// projects
export const ProjectsContainer = tw.div`
    flex
    flex-col
    w-full
`
// section title
export const SectionTitle = tw.h1`
    w-full
    text-3xl
    underline
    decoration-emerald-600
    my-[20px]
    font-semibold
`
// section title
export const SubSectionTitle = tw.h1`
    w-full
    text-2xl

    my-[20px]
`