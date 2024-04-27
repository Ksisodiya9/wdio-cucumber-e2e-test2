Feature: Demo feature
    Feature Description

    #@demo
    Scenario Outline: Run first demo feature

        Given Google page is opened
        When Search with <SearchItem>
        Then Click on first search result
        Then URL should match <ExpectedURL>

        Examples:
            | TestID    | SearchItem | ExpectedURL           |
            | DEMO_TC01 | WDIO       | https://webdriver.io/ |