const id_user = localStorage.getItem('cekLogin');
const initialState = id_user ? true : false;

console.log(initialState);
const state = {
  status: initialState,
  error: null,
};

const getters = {
  isAuthenticated: (state) => state.status,
};

const actions = {
  async LogIn({ commit }) {
    // try {
    //   // Simulasi proses login, bisa diubah sesuai kebutuhan (misalnya API call)
    localStorage.setItem('cekLogin', '234'); // Simpan id_user ke localStorage
    commit('setStatus', true)
    // } catch (error) {
    //   commit('SET_ERROR', error);
    // }
  },

  async LogOut({ commit }) {
    // try {
    //   // Simulasi proses logout, bisa diubah sesuai kebutuhan (misalnya API call)
    localStorage.removeItem('cekLogin'); // Hapus id_user dari localStorage
    commit('LogOut', false)
    // } catch (error) {
    //   commit('SET_ERROR', error);
    // }
  },
};

const mutations = {
  setStatus(state, status) {
    state.status = status
  },

  LogOut(state, status) {
    state.status = status
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
