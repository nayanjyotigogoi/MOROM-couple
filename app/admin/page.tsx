"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Settings } from "lucide-react"
import { categories } from "@/lib/data"

export default function AdminPage() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedTopic, setSelectedTopic] = useState("")
  const [newCategory, setNewCategory] = useState({ name: "", description: "" })
  const [newTopic, setNewTopic] = useState({ name: "", description: "", difficulty: "" })
  const [newQuestion, setNewQuestion] = useState({ question: "", options: ["", "", "", ""] })

  const handleAddCategory = () => {
    if (newCategory.name && newCategory.description) {
      // In a real app, this would save to a database
      console.log("Adding category:", newCategory)
      setNewCategory({ name: "", description: "" })
      alert("Category added! (In a real app, this would be saved to the database)")
    }
  }

  const handleAddTopic = () => {
    if (selectedCategory && newTopic.name && newTopic.description) {
      console.log("Adding topic to category:", selectedCategory, newTopic)
      setNewTopic({ name: "", description: "", difficulty: "" })
      alert("Topic added! (In a real app, this would be saved to the database)")
    }
  }

  const handleAddQuestion = () => {
    if (selectedTopic && newQuestion.question && newQuestion.options.every((opt) => opt.trim())) {
      console.log("Adding question to topic:", selectedTopic, newQuestion)
      setNewQuestion({ question: "", options: ["", "", "", ""] })
      alert("Question added! (In a real app, this would be saved to the database)")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Settings className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              MOROM Admin
            </h1>
          </div>
          <p className="text-lg text-gray-600">Manage categories, topics, and questions for the couples experience</p>
        </div>

        <Tabs defaultValue="categories" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="topics">Topics</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
          </TabsList>

          {/* Categories Tab */}
          <TabsContent value="categories" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Add New Category
                </CardTitle>
                <CardDescription>Create a new category for couples to explore</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="category-name">Category Name</Label>
                  <Input
                    id="category-name"
                    placeholder="e.g., Future Dreams"
                    value={newCategory.name}
                    onChange={(e) => setNewCategory((prev) => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="category-description">Description</Label>
                  <Textarea
                    id="category-description"
                    placeholder="Describe what this category is about..."
                    value={newCategory.description}
                    onChange={(e) => setNewCategory((prev) => ({ ...prev, description: e.target.value }))}
                  />
                </div>
                <Button onClick={handleAddCategory} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Category
                </Button>
              </CardContent>
            </Card>

            {/* Existing Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Existing Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-gray-600">{category.description}</p>
                        <p className="text-xs text-gray-500">{category.topics.length} topics</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Topics Tab */}
          <TabsContent value="topics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Add New Topic
                </CardTitle>
                <CardDescription>Add a topic to an existing category</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="select-category">Select Category</Label>
                  <select
                    id="select-category"
                    className="w-full p-2 border rounded-md"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Choose a category...</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="topic-name">Topic Name</Label>
                  <Input
                    id="topic-name"
                    placeholder="e.g., Dream Vacation Spots"
                    value={newTopic.name}
                    onChange={(e) => setNewTopic((prev) => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="topic-description">Description</Label>
                  <Textarea
                    id="topic-description"
                    placeholder="Describe this topic..."
                    value={newTopic.description}
                    onChange={(e) => setNewTopic((prev) => ({ ...prev, description: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="topic-difficulty">Difficulty Level</Label>
                  <Input
                    id="topic-difficulty"
                    placeholder="e.g., Fun, Spicy, Deep"
                    value={newTopic.difficulty}
                    onChange={(e) => setNewTopic((prev) => ({ ...prev, difficulty: e.target.value }))}
                  />
                </div>
                <Button onClick={handleAddTopic} className="w-full" disabled={!selectedCategory}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Topic
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Questions Tab */}
          <TabsContent value="questions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Add New Question
                </CardTitle>
                <CardDescription>Add a question to an existing topic</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="select-topic">Select Topic</Label>
                  <select
                    id="select-topic"
                    className="w-full p-2 border rounded-md"
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                  >
                    <option value="">Choose a topic...</option>
                    {categories.map((category) =>
                      category.topics.map((topic: any) => (
                        <option key={topic.id} value={topic.id}>
                          {category.name} - {topic.name}
                        </option>
                      )),
                    )}
                  </select>
                </div>
                <div>
                  <Label htmlFor="question-text">Question</Label>
                  <Textarea
                    id="question-text"
                    placeholder="What's your ideal way to spend a weekend together?"
                    value={newQuestion.question}
                    onChange={(e) => setNewQuestion((prev) => ({ ...prev, question: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Answer Options</Label>
                  {newQuestion.options.map((option, index) => (
                    <Input
                      key={index}
                      placeholder={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...newQuestion.options]
                        newOptions[index] = e.target.value
                        setNewQuestion((prev) => ({ ...prev, options: newOptions }))
                      }}
                    />
                  ))}
                </div>
                <Button onClick={handleAddQuestion} className="w-full" disabled={!selectedTopic}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Question
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Instructions */}
        <Card className="max-w-4xl mx-auto mt-8 border-2 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2 text-blue-800">Admin Instructions</h3>
            <div className="text-sm text-blue-700 space-y-2">
              <p>
                • <strong>Categories:</strong> Main themes like "Relationship", "Travel", etc.
              </p>
              <p>
                • <strong>Topics:</strong> Specific subjects within categories like "Dream Destinations"
              </p>
              <p>
                • <strong>Questions:</strong> Multiple choice questions with 4 options each
              </p>
              <p>• All content is stored in the data file and can be easily modified</p>
              <p>• In a production app, this would connect to a database</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
