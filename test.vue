<template>
  <div>
    <collapse accordion is-fullwidth>
      <collapse-item title="一级菜单">
        11111
      </collapse-item>
      <collapse-item title="一级菜单">
        2222222
      </collapse-item>
      <collapse-item title="一级菜单" selected>
        <collapse>
          <collapse-item title="二级菜单">
            二级菜单 11111
          </collapse-item>
          <collapse-item title="二级菜单">
            二级菜单 2222
          </collapse-item>
        </collapse>
      </collapse-item>
    </collapse>
  </div>
</template>

<script>

import { Collapse, Item as CollapseItem } from 'vue-bulma-collapse';

export default {
  components: {
    Collapse,
    CollapseItem
  }
}
</script>