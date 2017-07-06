import AppFooter from '@/components/common/footer/index'
import { homeServ } from '@/service'
import { formatPrice, currency } from '@/config/filter'
import AppHeader from './children/header/index.vue'

import Search from './children/search/index.vue'

export default {
  name: 'Home',
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
      colorIsActive: false,
      homeList: '',
    }
  },
  created() {
    homeServ.getHomeList().then(d => this.homeList = d)
  },
  methods: {
    // toggle header bakground
    handleScroll(e) {
      const scrollTop = e.target.scrollTop
      if (scrollTop > 50) {
        this.colorIsActive = true
      } else {
        this.colorIsActive = false
      }
    },
  },
}
