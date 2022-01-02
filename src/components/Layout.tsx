import { ReactNode } from 'react'
import {
  AppShell,
  Header,
  Title,
  Group,
  Button,
  Container,
  Space,
} from '@mantine/core'
import { useRouter } from 'next/router'
import { FileTextIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import postgreSQLIcon from '../media/elephant.png'

interface LayoutProps {
  children: ReactNode
}

const Layout = (props: LayoutProps) => {
  const router = useRouter()
  return (
    <AppShell
      padding="md"
      header={
        <Header height={75} padding="xs" dir="">
          <Group position="apart">
            <Group
              onClick={() => router.push('/')}
              ml="md"
              sx={(theme) => ({
                '&:hover': {
                  cursor: 'pointer',
                },
              })}
            >
              <Container>
                <Image
                  src={postgreSQLIcon}
                  width={50}
                  height={50}
                  alt="PostgreSQL icon"
                ></Image>
              </Container>
              <Title
                order={1}
                sx={(theme) => ({
                  '&:hover': {
                    color: theme.colors.gray[6],
                    cursor: 'pointer',
                  },
                })}
              >
                Home
              </Title>
            </Group>
            <Button
              variant="gradient"
              leftIcon={<FileTextIcon />}
              onClick={() => {
                router.push('/new')
              }}
              mr="lg"
            >
              Create
            </Button>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <div>{props.children}</div>
    </AppShell>
  )
}

export default Layout
