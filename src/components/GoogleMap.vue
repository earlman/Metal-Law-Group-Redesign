<template>
	<div>
		<!-- <div>
			<h2>Search and add a pin</h2>
			<label>
				<gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
				<button @click="addMarker">Add</button>
			</label>
			<br />
		</div>-->
		<gmap-map
			:options="{
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: true,
                disableDefaultUi: false
            }"
			:center="center"
			:zoom="15"
			style="width:100%;  height: 100%;"
		>
			<gmap-marker
				:key="index"
				v-for="(m, index) in markers"
				:position="m.position"
				@click="center=m.position"
			></gmap-marker>
		</gmap-map>
	</div>
</template>

<script>
export default {
	name: "GoogleMap",
	data() {
		return {
			// default to Montreal to keep it simple
			// change this to whatever makes sense
			center: { lat: 34.04933, lng: -118.26077470000001 },
			markers: [
				{ position: { lat: 34.04933, lng: -118.26077470000001 } }
			],
			places: [],
			currentPlace: null
		};
	},

	mounted() {
		// this.geolocate();
	},

	methods: {
		// receives a place object via the autocomplete component
		setPlace(place) {
			this.currentPlace = place;
		},
		addMarker() {
			if (this.currentPlace) {
				const marker = {
					lat: this.currentPlace.geometry.location.lat(),
					lng: this.currentPlace.geometry.location.lng()
				};
				this.markers.push({ position: marker });
				this.places.push(this.currentPlace);
				this.center = marker;
				this.currentPlace = null;
			}
		},
		geolocate: function() {
			navigator.geolocation.getCurrentPosition(position => {
				this.center = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
			});
		}
	}
};
</script>