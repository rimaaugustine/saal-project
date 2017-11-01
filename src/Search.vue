<template>
    <div>    
        <b-form>
             <b-row>
                 <b-col cols="10">
            <b-form-input size="lg" class="mr-md-2" type="text" v-model="search" placeholder="Search"/>
                 </b-col>
            <b-col cols="2">
            <b-button size="lg" class="my-2 my-md-0" type="submit">Search</b-button>  
            </b-col>
             </b-row>
        </b-form>
    
    <p>{{search}}</p>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            search:''
        }
        }
    }
</script>

