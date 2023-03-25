import { Header } from '@/components/Header/Header'
import { PageRow } from '@/components/PageRow/PageRow'
import { PageComponent } from '@/components/PageComponent/PageComponent'
import { Context } from '@/utils/Context'
import fakeApiRequestHeader from '@/components/Header/Header.cms.mock'
import { HeaderProps } from '@/components/Header/Header.types'
import { NextPage } from 'next'

const Main: NextPage<HeaderProps> = ({navItems}) => {
  return (
      <PageRow inverted={true}>
        <PageComponent>
          <Header navItems={navItems}/>
        </PageComponent>
      </PageRow>
  )
}

export async function getServerSideProps(context: Context) {
  const res = await fakeApiRequestHeader();

  if (!res) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: { navItems: res },
  }
}

export default Main;