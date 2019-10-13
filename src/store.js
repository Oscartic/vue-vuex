import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const movies = () => {
  return [{"id":1,"title":"Something to Talk About","description":"Injury of r int carotid, intcr w LOC of 31-59 min, sequela","available":true},
  {"id":2,"title":"Confidential Agent","description":"Crushing injury of left foot, subsequent encounter","available":true},
  {"id":3,"title":"Limelight","description":"Traumatic amputation of other parts of head, subs encntr","available":false},
  {"id":4,"title":"Coffee Town","description":"Assault by fertilizer bomb","available":true},
  {"id":5,"title":"Keys of the Kingdom, The","description":"Inj musc/fasc/tend at forearm level, left arm, init encntr","available":false},
  {"id":6,"title":"Nobody Knows Anything!","description":"Car driver injured in collision w SUV in traf, sequela","available":true},
  {"id":7,"title":"Extraordinary Measures","description":"Benign neoplasm of ureter","available":true},
  {"id":8,"title":"Asterix vs. Caesar (Astérix et la surprise de César)","description":"Sprain of unspecified collateral ligament of knee","available":true},
  {"id":9,"title":"Fando and Lis (Fando y Lis)","description":"Displaced midcervical fracture of right femur, init","available":false},
  {"id":10,"title":"Nothing But Trouble","description":"Oth soft tissue disord related to use/pressure, unsp forearm","available":false},
  {"id":11,"title":"Enigma","description":"Fall down embankment (hill), subsequent encounter","available":true},
  {"id":12,"title":"Ethan Mao","description":"Refractive amblyopia","available":true},
  {"id":13,"title":"Incredibly Strange Creatures Who Stopped Living and Became Mixed-Up Zombies!!?, The","description":"Perpetrator of assault, maltreatment and neglect","available":false},
  {"id":14,"title":"Open House ","description":"Stress fracture, right foot","available":true},
  {"id":15,"title":"Undefeated, The","description":"Oth stimulant depend w stim-induce psych disorder w hallucin","available":true},
  {"id":16,"title":"Baghban","description":"Inj left quadriceps muscle, fascia and tendon, sequela","available":true},
  {"id":17,"title":"Phaedra","description":"Chronic embolism and thombos of deep vein of unsp low extrm","available":true},
  {"id":18,"title":"Lizard, The (Marmoulak)","description":"Stress fracture, right foot, sequela","available":false},
  {"id":19,"title":"Nude Nuns with Big Guns","description":"Unsp fx unsp low leg, subs for opn fx type I/2 w delay heal","available":false},
  {"id":20,"title":"Vampyr","description":"Contact with other hot fluids, subsequent encounter","available":true},
  {"id":21,"title":"Macao","description":"Functional diarrhea","available":false},
  {"id":22,"title":"Pumpkinhead","description":"Complete lesion at T7-T10, sequela","available":true},
  {"id":23,"title":"Night of the Following Day, The","description":"Pasngr in pk-up/van injured in clsn w hv veh in traf, subs","available":false},
  {"id":24,"title":"Zona Zamfirova","description":"Driver of hv veh inj in clsn w nonmtr vehicle in traf, init","available":false},
  {"id":25,"title":"Shadow of the Holy Book (Pyhän kirjan varjo)","description":"Posterior subluxation of right hip, sequela","available":true},
  {"id":26,"title":"Alamo, The","description":"Strain long flexor musc/fasc/tend l thm at wrs/hnd lv, sqla","available":true},
  {"id":27,"title":"Band of the Hand","description":"Unsp foreign body in esophagus causing other injury, sequela","available":true},
  {"id":28,"title":"Station West","description":"Unsp inj musc/tend peroneal grp at low leg level, right leg","available":false},
  {"id":29,"title":"Silent House","description":"War op involving explosion of marine mine, civilian, sequela","available":false},
  {"id":30,"title":"Run of the Arrow","description":"Terrorism, sec effects, publ sfty offcl injured, sequela","available":false},
  {"id":31,"title":"Omega Man, The","description":"Prsn brd/alit mtrcy injured in clsn w rail trn/veh, subs","available":true},
  {"id":32,"title":"Boys Next Door, The","description":"Nondisp fx of dist phalanx of r lit fngr, 7thG","available":false},
  {"id":33,"title":"Tony Manero","description":"Oth disrd of mid ear and mastoid in diseases classd elswhr","available":true},
  {"id":34,"title":"Jackboots on Whitehall","description":"Driver of pk-up/van injured in collision w oth mv nontraf","available":false},
  {"id":35,"title":"Sidestreet","description":"Contact with scissors, initial encounter","available":false},
  {"id":36,"title":"Telefon","description":"Unsp fx second MC bone, right hand, subs for fx w routn heal","available":false},
  {"id":37,"title":"3 Women (Three Women)","description":"Nondisp fx of neck of first MC bone, l hand, init for opn fx","available":false},
  {"id":38,"title":"Talk of Angels","description":"Unsp fracture of occiput, init encntr for open fracture","available":false},
  {"id":39,"title":"Separate Tables","description":"Displ unsp condyle fx low end unsp femr, 7thH","available":true},
  {"id":40,"title":"The Damned","description":"Oth diabetes w unsp diabetic retinopathy w/o macular edema","available":true},
  {"id":41,"title":"Typhoon (Tae-poong)","description":"Unsp comp of fb acc left in body fol inject or immuniz, subs","available":false}]
}

export default new Vuex.Store({
  state: {
    movies: movies(),
    filter: {
      query: '',
      available: true
    }
  },
  mutations: {
    SET_QUERY (state, query) {
      state.filter.query = query;
    },
    SET_AVAILABLE (state) {
      state.filter.available = ! state.filter.available;
    }
  },
  getters: {
    filteredMovies (state) {
      let movies = state.movies.filter( movie => movie.available === state.filter.available);
      if ( state.filter.query.length > 2 ) {
        return movies.filter(movie => movie.title.toLowerCase().includes(state.filter.query));
      }
      return movies;
    }
  }
})
