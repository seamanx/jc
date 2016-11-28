<template>
  <div>
    <group>
      <cell v-for="(key, val) in $device" :title="key">{{val}}</cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from '../components-vux'

export default {
  components: {
    Group,
    Cell
  }
}
</script>