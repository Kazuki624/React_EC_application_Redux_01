import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
import { uniq, sortBy } from "lodash";
import { loremIpsum } from "lorem-ipsum";
import { stringSimilarity as getSimScore} from "string-similarity-js"

const defaultCategory = "All"

data.forEach(d => d.description = loremIpsum());

export const { actions, reducer } = createSlice({
    name :"products",
    initialState : {
        products : data,
        productsFromSearch : data,
        categories :[defaultCategory, ...(uniq(data.map((product) => product.category))).sort()],
        selectedCategories :defaultCategory,
        single: data[0],
        singleSimilarProducts : [],
        searchTerm : ""
    },
    reducers : {
        setSearchTerm(state, {payload:searchTerm}) {   //「searchBar onChangeイベントで入力された文字列を再レンダリングで「searchThem」格納。
            // Reset navbar 
            state.productsFromSearch = state.products
            state.selectedCategories = defaultCategory
            state.searchTerm = searchTerm              //initialStateオブジェクトの[searchTerm]に文字列が格納され、reducerでstateが更新される
            // Search Operation
            if(searchTerm.length > 0){
                state.productsFromSearch.forEach((p) => {
                    p.simScore = getSimScore(`${p.name} ${p.category}`, searchTerm);  //ループでstringSimilarityで各商品の名前・カテゴリーの一致度を数値化
                })
                state.productsFromSearch = sortBy(state.productsFromSearch, "simScore").reverse() //数値化された商品の順序を並べ替える            
            }else{
                state.productsFromSearch = state.products
            }
        },
        setSelectedCategory(state, {payload:category}){
            state.searchTerm = ""
            state.selectedCategories = category
            state.productsFromSearch = state.products.filter((p) => (
               (category === defaultCategory) ? true : (p.category === category)
            ))
        },
        setSingle(state, {payload:id}){
            const product = state.products.find((p) => p.id === +id)
            state.single = product
            // Get similar Product
            state.singleSimilarProducts = state.products.filter((p) => {
                return (p.category === product.category) && (p.id !==product.id)
            })
        }
    }
})