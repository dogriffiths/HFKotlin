data class Recipe(
    val title: String,
    val mainIngredient: String,
    val isVegetarian: Boolean = false,
    val difficulty: String = "Easy"
) {
}

class Mushroom(val size: Int, val isMagic: Boolean) {
    constructor(isMagic_param: Boolean) : this(0, isMagic_param) {
        //Code that runs when the secondary constructor is called
    }
}

fun findRecipes(
    title: String = "",
    ingredient: String = "",
    isVegetarian: Boolean = false,
    difficulty: String = ""
): Array<Recipe> {
    //Code to find recipes
    return arrayOf(Recipe(title, ingredient, isVegetarian, difficulty))
}

fun addNumbers(a: Int, b: Int): Int {
    return a + b
}

fun addNumbers(a: Double, b: Double): Double {
    return a + b
}

fun main(args: Array<String>) {
    val r1 = Recipe("Thai Curry", "Chicken")
    val r2 = Recipe(title = "Thai Curry", mainIngredient = "Chicken")
    val r3 = r1.copy(title = "Chicken Bhuna")
    println("r1 hash code: ${r1.hashCode()}")
    println("r2 hash code: ${r2.hashCode()}")
    println("r3 hash code: ${r3.hashCode()}")
    println("r1 toString: ${r1.toString()}")
    println("r1 == r2? ${r1 == r2}")
    println("r1 === r2? ${r1 === r2}")
    println("r1 == r3? ${r1 == r3}")
    val (title, mainIngredient, vegetarian, difficulty) = r1
    println("title is $title and vegetarian is $vegetarian")
    val m1 = Mushroom(6, false)
    println("m1 size is ${m1.size} and isMagic is ${m1.isMagic}")
    val m2 = Mushroom(true)
    println("m2 size is ${m2.size} and isMagic is ${m2.isMagic}")
    println(addNumbers(2, 5))
    println(addNumbers(1.6, 7.3))
}