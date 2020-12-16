Feature: Story list

  Scenario: No stories submitted

    When there are no stories in the database
    Then the message "Sorry, there have been no stories submitted yet." is displayed

  Scenario: Select a story

    When a story is clicked
    Then I am taken to the story URL

  Scenario: Select a story's comments

    When a story's comments are clicked
    Then I am taken to the story comments page

  Scenario: Multiple pages of stories

    When there are more than 10 stories in the database
    Then only the first 10 stories are shown

  Scenario: Navigating multiple pages of stories

    When there are more than 10 stories in the database
    Then page navigation elements are displayed
