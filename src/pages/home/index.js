import AppFooter from '@/pages/common/footer/index'
import { homeServ } from '@/service'
import { formatPrice, currency } from '@/utils/filter'
import AppHeader from './children/header/index.vue'

import enLocale from './locales/en_US.json'

import Search from './children/search/index.vue'

export default {
  name: 'Home',
  i18n: enLocale,
  components: {
    AppHeader,
    AppFooter,
    Search,

  },
  filters: {
    formatPrice,
    currency,
  },
  data() {
    return {
      homeList: '',
      bannerHeight: '',
    }
  },
  created() {
    const bannerImageRadio = 720 / 322
    this.bannerHeight = `${(screen.width * 2) / bannerImageRadio}px`
    homeServ.getHomeList().then(d => this.homeList = d)
  },
  methods: {
    handleRecommendListScroll(e) {
      const offsetY = e.nativeEvent.contentOffset.y
      const headerOpacity = Math.min(1.0, offsetY / 30) < 0 ? 0 : Math.min(1.0, offsetY / 30)
      this.setState({ headerBackgroundColor: `rgba(255,255,255,${headerOpacity})` })
    },
  },
}
