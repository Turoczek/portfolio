import { Context } from '@/utils/Context'
import fakeApiRequestHeader from '@/components/Header/Header.cms.mock'
import { HeaderProps } from '@/components/Header/Header.types'
import { NextPage } from 'next'
import { AboutMeFirstPart, AboutMeSecondPart, AboutMeThirdPart, Header, PageRow, Text } from '@/components'

const Main: NextPage<HeaderProps> = ({ navItems }) => {
  return (
    <>
      <PageRow>
        <AboutMeFirstPart />
      </PageRow>
      <PageRow inverted>
        <AboutMeSecondPart />
      </PageRow>
      <PageRow>
        <AboutMeThirdPart />
      </PageRow>
    </>
  );
}

export const getStaticProps = async (context: Context) => {
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