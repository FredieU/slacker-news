Feature: Story

  Scenario: Viewing a story

    Given the user is on the home page
    When the user navigates to a story page
    Then the user will see all the comments

  Scenario: Adding a comment

    Given the user is on the story page
    When the user submits their comment
    Then it will show on the story page

  Scenario: Upvoting a story

    Given the user is on the story page
    When the user upvotes the story
    Then the story's point count goes up by one
