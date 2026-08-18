import { Link } from '../components/Link.jsx'
import { PageLayout } from '../components/PageLayout.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { PAGE_META } from '../data/meta.js'
import { projectImage } from '../data/projects.js'
import { useLang } from '../i18n/LangProvider.jsx'
import { localizedPath } from '../data/site.js'

export default function VrLandingPage() {
  const { lang, enPath, zhPath } = useLang()
  const meta = PAGE_META.vr[lang]

  usePageMeta({
    ...meta,
    canonicalPath: lang === 'zh' ? '/zh/vr/' : '/vr/',
    enPath,
    zhPath,
  })

  const vrSonPath = localizedPath('/vr-son/', lang)
  const tbc = lang === 'zh' ? '製 作 中' : 'To Be Continued'

  return (
    <PageLayout activeKey="vr">
      <div className="vr-stage">
        <img className="broccoli" src={projectImage('d18541_bdbf8a992eb4480d8d81cdd88040cfa8~mv2.png')} alt="" />
        <Link to={vrSonPath} className="badge son-badge">
          <img className="badge-default" src={projectImage('vr-badge-default.png')} alt="Sense Of Nowhere" />
          <img className="badge-press" src={projectImage('vr-pig-press.png')} alt="" />
        </Link>
        <div className="badge flower">
          <img className="badge-default" src={projectImage('d18541_6fc5e4e0023a4dfe868a8566b97d2c5d~mv2.png')} alt="" />
          <img className="badge-press" src={projectImage('d18541_a602fb01e106493ca8a36240bca80987~mv2.png')} alt="" />
          <span className="tbc">{tbc}</span>
        </div>
      </div>
    </PageLayout>
  )
}
