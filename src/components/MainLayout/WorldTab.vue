<script setup lang="ts">
import { ref, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import { useMainStore } from 'src/stores/MainStore';
import { WorldEdited } from 'app/src-electron/schema/world';
import { useDialogStore } from 'src/stores/DialogStore';
import { isFailure } from 'app/src-electron/api/failable';

interface Props {
  world: WorldEdited;
  idx: number;
}
const prop = defineProps<Props>();

const mainStore = useMainStore();

const router = useRouter();
const goProgress = async () => {
  await router.replace('progress');
};
async function runServer() {
  // await goProgress();

  // // toRaw(proxy)とすることでvue上のProxyオブジェクトのtargetを抜き出せる
  // const res = await window.API.invokeRunServer(toRaw(prop.world));

  // checkError(res, console.log, 'サーバーが異常終了しました。')
}

const clicked = ref(false);
const itemHovered = ref(false);
const runBtnHovered = ref(false);

const versionName = `${prop.world.version.id} (${prop.world.version.type})`

/**
 * ゴミ箱ボタンを押したときの削除処理
 */
//  function removeWorld(item: WorldEdited) {
//   async function removeAction() {
//     const res = await window.API.invokeDeleteWorld(item)
//     if (isFailure(res)) {
//       useDialogStore().showDialog(
//         `${item.name}の削除に失敗しました`
//       )
//     }
//     else {
//       mainStore.worldList.splice(prop.idx, 1)
//     }
//   }

//   useDialogStore().showDialog(
//     `${item.name}をワールド一覧から削除しますか？`, 
//     [
//       {label: 'キャンセル'},
//       {label: 'OK', color: 'primary', action: removeAction},
//     ]
//   )
// }
</script>

<template>
  <q-item
    clickable
    :active="(clicked = mainStore.selectedIdx == prop.idx)"
    :focused="(clicked = mainStore.selectedIdx == prop.idx)"
    @click="mainStore.selectedIdx = idx"
    v-on:dblclick="runServer"
    @mouseover="itemHovered = true"
    @mouseleave="itemHovered = false"
    class="worldBlock"
  >
    <q-item-section
      avatar
      @mouseover="runBtnHovered = true"
      @mouseleave="runBtnHovered = false"
    >
      <q-avatar square size="4rem">
        <q-img
          :src="world.avater_path ?? 'src/assets/defaultWorldIcon.svg'"
          :ratio="1"
        />
        <q-btn
          v-show="clicked || runBtnHovered"
          @click="runServer"
          flat
          dense
          size="2rem"
          icon="play_arrow"
          text-color="white"
          class="absolute-center q-mini-drawer-hide hantoumei"
        />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div>
        <p class="worldName">{{ world.name }}</p>
        <p class="versionName">{{ versionName }}</p>
      </div>
    </q-item-section>
  </q-item>
</template>

<style scoped lang="scss">
.worldBlock {
  height: 5.5rem;
}

.worldName {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

.versionName {
  font-size: 1rem;
  margin-bottom: 4px;
}

.hantoumei {
  background-color: rgba($color: $primary, $alpha: 0.7);
}
</style>